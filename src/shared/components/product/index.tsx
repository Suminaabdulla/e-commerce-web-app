import Image from "next/image";
import { FC } from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { OutlinedButton } from "@/core/components/button";
import { Product } from "@/models/product";
import ProductTag from "@/shared/components/product/ProductTag";
import styles from "./SingleProduct.module.css";

interface ISingleProduct {
    product: Product;
}

const SingleProduct: FC<ISingleProduct> = ({ product }) => {
    const hasOffer = Boolean(product?.offer);

    const renderProductCategoryAndName = () => (
        <>
            <Typography className={styles.categoryText}>{product?.category}</Typography>
            <Typography className={styles.titleText} fontWeight="bold">{product?.title}</Typography>
        </>
    );

    const renderProductImage = () => (
        <Box className={styles.imageContainer}>
            <Image
                src={product?.image}
                alt={product?.title}
                layout="responsive"
                width={50}
                height={20}
                objectFit='cover'
            />
        </Box>
    );
    
    const renderMonthlyPrice = () => (
        <Box className={styles.priceContainer}>
            <Typography className={styles.currencyText}>BD</Typography>
            <Grid container alignItems={'center'} justifyContent="center">
                <Typography variant="h4" fontWeight="bold">{product.monthly.toString().split('.')[0]}</Typography>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography fontWeight="bold" fontSize={12}>
                        .{product.monthly.toString().split('.')[1].padEnd(3, '0')}
                    </Typography>
                    <Typography fontWeight="normal" fontSize={10}>/mo</Typography>
                </Box>
            </Grid>
        </Box>
    );

    const renderFullPriceAndOfferPrice = () => (
        <Typography fontWeight="bold" fontSize={12} marginLeft={0.5}>
            {product?.discount_price ? (
                <>
                    <s style={{ color: '#ff375e', fontWeight:'lighter' }}>{product?.price} BD</s> BD 
                    <span className={styles.discountPrice}>{product?.discount_price}</span>
                </>
            ) : (
                `BD ${product?.price}`
            )}
            {product?.discount_price && (
                <span className={styles.vatText}>vat inclusive</span>
            )}
        </Typography>
    );

    return (
        <div className={`${!hasOffer ? styles.productContainer : ''}`}>
            {hasOffer && (
                <Box className={styles.productTagContainer}>
                    <ProductTag tagText={product?.offer} />
                </Box>
            )}
            <Card className={styles.cardContainer}>
                {renderProductCategoryAndName()}
                {renderProductImage()}
                <Typography className={styles.startingFromText}>Starting from</Typography>
                {renderMonthlyPrice()}
                <Grid container alignItems='center' justifyContent='center' display='flex' marginBottom={5}>
                    <LocalOfferOutlinedIcon fontSize='inherit' sx={{ transform: 'rotate(100deg)', marginRight: '5px', color:"#4f008c" }} />
                    <Typography className={styles.startingFromText}>Full Price:</Typography>
                    {renderFullPriceAndOfferPrice()}
                </Grid>
                <OutlinedButton className={styles.buyButton}>Buy this device</OutlinedButton>
            </Card>
        </div>
    );
}

export default SingleProduct;
