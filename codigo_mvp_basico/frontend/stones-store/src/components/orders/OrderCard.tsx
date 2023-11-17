import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faTruckFast, faCheckCircle, faCartFlatbed } from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";


interface Props {
    status: string;
    deliveryDate:string;
    productId:string;
    orderId:string;
    product:{
        name:string;
        price:string;
        image:string;
        category:string;
        description:string;

    }
}



export default function OrderCard(props : Props) {
    const [processing, setProcessing] = useState(false)
    const [transporting, setTransporting] = useState(false)
    const [delivered, setDelivered] = useState(false)

    const [processingColor, setProcessingColor] = useState("grey")
    const [transportingColor, setTransportingColor] = useState("grey")
    const [deliveredColor, setDeliveredColor] = useState("grey")


    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        switch (status) {
            case "PROCESSING":
                setProcessing(true)
                setProcessingColor("blue")
                break;
            case "SHIPPING":
                setProcessing(true)
                setProcessingColor("green")
                setTransporting(true)
                setTransportingColor("blue")
                break;
            case "DELIVERED":
                setProcessing(true)
                setProcessingColor("green")
                setTransporting(true)
                setTransportingColor("green")
                setDelivered(true)
                setDeliveredColor("green")
                break;
        }
    }, [status])

    return (
        <a
            href="#"
            className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
        >
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            ></span>
            <div className={"grid grid-cols-1 gap-5"}>
            <div>
                <div className="sm:flex sm:justify-start sm:gap-4">
                <div className="hidden sm:block sm:shrink-0">
                    <img
                        alt="Paul Clapton"
                        src={props.product.image}
                        className="h-52 w-52 rounded-lg object-cover shadow-sm"
                    />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                    #{props.orderId} {props.product.name}
                    </h3>



                    <div className="">
                        <p className="max-w-[40ch] text-sm text-gray-500">
                            {props.product.description}

                        </p>
                    </div>
                </div>
            </div>
                <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600">{props.product.category}</dt>
                    <dd className="text-xs text-gray-500">Categoria</dd>
                </div>

                <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600">{props.deliveryDate}</dt>
                    <dd className="text-xs text-gray-500">Data de entrega</dd>
                </div>
            </dl>
            </div>
                <div>
                    <div className={"p-5"}>

                        <ol className="items-center sm:flex">
                            <li className="relative mb-6 sm:mb-0 w-1/2">
                                <div className="flex items-center">
                                    <div className={`z-10 flex items-center justify-center w-16 h-16 bg-${processingColor}-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0`}>
                                        <FontAwesomeIcon icon={faCartFlatbed} size={'2x'} color={processingColor}/>
                                    </div>
                                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                </div>
                                <div className="mt-3 sm:pr-8">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Em processamento</h3>
                                </div>
                            </li>
                            <li className="relative mb-6 sm:mb-0 w-1/2">
                                <div className="flex items-center">
                                    <div className={`z-10 flex items-center justify-center w-16 h-16 bg-${transportingColor}-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0`}>
                                        <FontAwesomeIcon icon={faTruckFast}  size={'2x'} color={transportingColor}/>
                                    </div>
                                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                </div>
                                <div className="mt-3 sm:pr-8">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Em transporte</h3>
                                </div>
                            </li>
                            <li className="relative mb-6 sm:mb-0">
                                <div className="flex items-center">
                                    <div className={`z-10 flex items-center justify-center w-16 h-16 bg-${deliveredColor}-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0`}>
                                        <FontAwesomeIcon icon={faCheckCircle} color={deliveredColor}  size={'4x'}/>
                                    </div>
                                </div>
                                <div className="mt-3 sm:pr-8">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Entregue</h3>
                                </div>
                            </li>
                        </ol>

                    </div>
                </div>
            </div>
        </a>
    )
}