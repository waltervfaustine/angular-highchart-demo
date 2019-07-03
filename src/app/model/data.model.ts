export interface BookingData {
    _id: string;
    vendorId: string;
    clientId: string;
    client: string;
    vendor: string;
    read: boolean;
    cancelled: boolean;
    vread: boolean;
    __v: number;
    productId: {
        _id: string;
        product_name: string;
        product_description: string;
        price: number;
        product_vendor: string;
        unit: string;
        moq: string;
        product_image: string;
        __v: 0;
    };
    bookingId: {
        _id: string;
        client: string;
        service_provider: string;
        productId: string;
        event_date: string;
        peopleNo: number;
        msg: string;
        read: boolean;
        time: string;
        identifier: string;
        accepted: boolean;
        denied: boolean;
        __v: number;
    };
}

export interface SeriesData {
    name: string;
    data: number;
}
