import { IconButton } from "vcc-ui";
import ChevronIcon from "../../public/css/components/icons/chevron-icon";

import styles from '../../public/css/paginationDesktop.module.css'

interface PaginationDesktopProps {
    onClickLeft: () => void;
    onClickRight: () => void;
}

export default function PaginationDesktop({ onClickLeft, onClickRight }: PaginationDesktopProps) {
    return (
        <div className={styles.btnWrapper}>
            <IconButton onClick={onClickLeft} variant="outline" aria-label="esquerda" iconName="navigation-chevronback"></IconButton>
            <IconButton onClick={onClickRight} variant="outline" aria-label="direita" iconName="navigation-chevronforward"></IconButton>
        </div>
    )
}