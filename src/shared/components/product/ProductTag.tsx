import { FC } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./ProductTag.module.css";

interface IOfferBanner {
    tagText: string;
}

const ProductTag: FC<IOfferBanner> = ({ tagText }) => {
    return (
        <Box className={styles.productTagContainer}>
            <Typography className={styles.productTagText}>{tagText}</Typography>
        </Box>
    );
}

export default ProductTag;
