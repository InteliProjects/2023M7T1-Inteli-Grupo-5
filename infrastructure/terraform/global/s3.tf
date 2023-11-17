resource "aws_s3_bucket" "store-bucket" {
  bucket = "store-bucket-arqcorp"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
  
  tags = {
    Name = "store-bucket-arqcorp"
  }
  
}

resource "aws_cloudfront_origin_access_identity" "s3_origin_access_identity" {
  comment = "S3 origin access identity for store-bucket"
}

resource "aws_s3_bucket_policy" "public_access" {
  bucket = aws_s3_bucket.store-bucket.id

  policy = jsonencode({
    "Version": "2012-10-17",
    "Id": "Policy1692122833651",
    "Statement": [
        {
            "Sid": "Stmt1692122770670",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject",
                "s3:PutObject",
                "s3:DeleteObject"
            ],
            "Resource": "${aws_s3_bucket.store-bucket.arn}/files/*"
        }
    ]
  })
}

resource "aws_cloudfront_distribution" "cdn" {
  origin {
    domain_name = aws_s3_bucket.store-bucket.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.store-bucket.id

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.s3_origin_access_identity.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "CDN for store-bucket"
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = aws_s3_bucket.store-bucket.id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "allow-all"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

