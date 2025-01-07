const TableData = () => {
  // Headers
  const headers: string[] = [
    "S/N",
    "Image",
    "SKU",
    "Name",
    "Title",
    "Description",
    "Brand",
    "Cost Price",
    "Quantity",
    "Size",
  ];

  // Dummy data for table body (10x10 array of mixed types)
  const data: (
    | number
    | string
    | string
    | string
    | string
    | string
    | number
    | number
    | number
    | number
  )[][] = [
    [
      1,
      "images/image1.svg",
      "MG234567",
      "Gloss",
      "Beauty and Glamour",
      "Lorem Ipsum is Lorem Ipsum",
      18.0,
      123,
      234,
      12,
    ],
    [
      2,
      "images/image2.svg",
      "MG234567",
      "Gloss",
      "Beauty and Glamour",
      "Lorem Ipsum is Lorem Ipsum",
      18.0,
      123,
      234,
      12,
    ],
    [
      3,
      "images/image3.svg",
      "MG234567",
      "Gloss",
      "Gadget",
      "Lorem Ipsum is Lorem Ipsum",
      18.0,
      123,
      234,
      12,
    ],
    [
      4,
      "images/image4.svg",
      "MG234567",
      "Gloss",
      "Shoe",
      "Lorem Ipsum is Lorem Ipsum",
      18.0,
      123,
      234,
      12,
    ],
    [
      5,
      "images/image5.svg",
      "MG234567",
      "Gloss",
      "Cream",
      "Lorem Ipsum is Lorem Ipsum",
      18.0,
      123,
      234,
      12,
    ],
    [
      6,
      "images/image6.svg",
      "MG234567",
      "Gloss",
      "Lotions",
      "Lorem Ipsum is Lorem Ipsum",
      18.0,
      123,
      234,
      12,
    ],
    [
      7,
      "images/image7.svg",
      "MG234567",
      "Gloss",
      "Beauty and Glamour",
      "Lorem Ipsum is Lorem Ipsum",
      18.0,
      123,
      234,
      12,
    ],
    [
      8,
      "images/image8.svg",
      "MG234567",
      "Gloss",
      "Watch",
      "Lorem Ipsum is Lorem Ipsum",
      18.0,
      123,
      234,
      12,
    ],
    [
      9,
      "images/image9.svg",
      "MG234567",
      "Gloss",
      "Beauty and Glamour",
      "Lorem Ipsum is Lorem Ipsum",
      18.0,
      123,
      234,
      12,
    ],
    [
      10,
      "images/image10.svg",
      "MG234567",
      "Gloss",
      "Beauty and Glamour",
      "Lorem Ipsum is Lorem Ipsum",
      18.0,
      123,
      234,
      12,
    ],
  ];

  return { headers, data };
};

export default TableData;
