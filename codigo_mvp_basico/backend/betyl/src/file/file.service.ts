import { Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FileService {
  AWS_S3_BUCKET = process.env.AWS_BUCKET_NAME;
  s3 = new AWS.S3({
    sessionToken: process.env.AWS_SESSION_TOKEN,
  });
 
  create(createFileDto: CreateFileDto) {
    return 'This action adds a new file';
  }

  findAll() {
    return `This action returns all file`;
  }

  findOne(id: number) {
    return `This action returns a #${id} file`;
  }

  update(id: number, updateFileDto: UpdateFileDto) {
    return `This action updates a #${id} file`;
  }

  remove(id: number) {
    return `This action removes a #${id} file`;
  }

  async s3_upload(
    file: Express.Multer.File,
    bucket: string,
    name: string,
    mimetype: string,
  ) {
    console.log(process.env.AWS_ACCESS_KEY);
    console.log(process.env.AWS_SECRET_ACCESS_KEY);
    const params = {
      Bucket: bucket,
      Key: `files/${name}`,
      Body: file.buffer,
      ContentType: mimetype,
      ContentDisposition: 'inline',
      CreateBucketConfiguration: {
        LocationConstraint: 'us-east-1',
      },
    };

    const response = await this.s3.upload(params).promise();
    return response;
  }

  async uploadFile(file: Express.Multer.File) {
    console.log('Uploading....');
    // create a random file name with uuid instead of original name
    const { originalname } = file;
    const randomUUID = uuidv4().toString();
    const fileName = `${randomUUID}-${originalname}`;

    return await this.s3_upload(
      file,
      this.AWS_S3_BUCKET,
      fileName,
      file.mimetype,
    );
  }
}
