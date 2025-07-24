import React from 'react';
import { Box } from '@mui/material';
import CommonProductStatistic from '../CommonComponents/CommonProductStatistic';

const AllProductsDetails = () => {
  // edit handlers
  const handleEdit1 = () => console.log('Edit section 1');
  const handleEdit2 = () => console.log('Edit section 2');
  const handleEdit3 = () => console.log('Edit section 3');
  const handleEdit4 = () => console.log('Edit section 4');
  const handleEdit5 = () => console.log('Edit section 5');
  const handleEdit6 = () => console.log('Edit section 6');
  const handleEdit7 = () => console.log('Edit section 7');
  const handleEdit8 = () => console.log('Edit section 8');

// product data of Images
  const products = [
    { label: 'Dual', image: '/assets/Dual.png' },
    { label: 'Hands free', image: '/assets/Handsfree.png' },
    { label: 'Scanlock', image: '/assets/Scanlock.png' },
    { label: 'Single', image: '/assets/Single.png' },
    { label: 'Core-R', image: '/assets/Core-R.png' },
    { label: 'Core-S', image: '/assets/Core-R.png' },
    { label: 'Summit', image: '/assets/Single.png' },
    { label: 'Surface Mount', image: '/assets/Single.png' },
    { label: 'L10', image: '/assets/Scanlock.png' },
  ];

  //product accessories data
  const productsacc = [
    { label: 'Dual', image: '/assets/dual2.png' },
    { label: 'Hands free', image: '/assets/core-r2.png' },
    { label: 'Scanlock', image: '/assets/Scanlock.png' },
    { label: 'Single', image: '/assets/single2.png' },
    { label: 'Core-R', image: '/assets/Core-R.png' },
    { label: 'Core-S', image: '/assets/Core-R.png' },

  ];

  return (
    <Box sx={{ p: 2 }}>
{/* rendering different components through reusable component  CommonProductStatistic*/}
      <CommonProductStatistic
        iconSrc="/assets/Prodcustbaseicon.png"
        title="Product Base Properties"
        onEdit={handleEdit1}
       
      />

      <CommonProductStatistic
        iconSrc="/assets/ProductTrackingImgae.png"
        title="Product Tracking Details"
        onEdit={handleEdit1}
        data={[
          { batch: '2873416', serial: '1124532' },
          { batch: '2873416', serial: '1124532' },
          { batch: '2873416', serial: '1124532' },
          { batch: '2873416', serial: '1124532' },
          { batch: '0903499', serial: '5524432' },
        ]}
      />

      <CommonProductStatistic
        iconSrc="/assets/ProductMetaattrimg.png"
        title="Product Metadata Attributes"
        onEdit={handleEdit2}
        data={[
          {
            label: "Foot Type",
            value: "E-Z"
          },
          {
            label: "Foot Distance",
            value: "51.25 cm, 52.75 cm, 68.34 cm"
          },
          {
            label: "Technology",
            value: "SmartLED, Linear Super-LED, TRIO"
          },
          {
            label: "Height",
            value: "17.8 cm, 24.9 cm, 32.4 cm"
          },
          {
            label: "Hardware",
            value: "22 AWG, 33 AWG, 37 AWG"
          }
        ]}
      />

      <CommonProductStatistic
        iconSrc="/assets/prodimensionpowerimg.png"
        title="Product Dimension & Power"
        onEdit={handleEdit3}
        data={[
          {
            label: "Height",
            value: "31.75 cm"
          },
          {
            label: "Width",
            value: "52 cm"
          },
          {
            label: "Depth",
            value: "19.5 cm"
          },
          {
            label: "Weight",
            value: "63 kg"
          },
          {
            label: "Voltage",
            value: "12 v"
          },
          {
            label: "Power Rating",
            value: "300 W"
          }
        ]}
      />

      <CommonProductStatistic
        iconSrc="/assets/prodfinancialimg.png"
        title="Product Financials"
        onEdit={handleEdit4}
        data={[
          {
            label: "Material Cost",
            value: "$175.23"
          },
          {
            label: "Labor Cost",
            value: "$291.46"
          },
          {
            label: "Process Cost",
            value: "$66.21"
          },
          {
            label: "Misc. Cost",
            value: "$15.49"
          },
          {
            label: "Last Price",
            value: "$1,875.23"
          }
        ]}
      />

      <CommonProductStatistic
        iconSrc="/assets/prodvehicleimg.png"
        title="Product Vehicles"
        onEdit={handleEdit4}

      />

      <CommonProductStatistic
        iconSrc="/assets/productaltimg.png"
        title="Product Alternates"
        onEdit={handleEdit5}
        data={products}

      />

      <CommonProductStatistic
        iconSrc="/assets/prodaccessoriesimg.png"
        title="Product Accessories"
        onEdit={handleEdit6}
        data={productsacc}

      />

      <CommonProductStatistic
        iconSrc="/assets/prodoptions.png"
        title="Product Options"
        onEdit={handleEdit7}

      />

      <CommonProductStatistic
        iconSrc="/assets/prodassetmgmtimg.png"
        title="Product Asset Management"
        onEdit={handleEdit8}

      />

    </Box>
  );
};

export default AllProductsDetails;