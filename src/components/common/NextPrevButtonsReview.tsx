import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

export const NextArrow = (props:any) => {
    const { style, onClick } = props;
    return (
        <div style={{ ...style, display: "block" }} onClick={onClick}>
        <MdKeyboardDoubleArrowRight
            className="slick-arrow-icon-right text-3xl cursor-pointer"
        />
        </div>
    );
}

export const PrevArrow = (props:any) => {
    const { style, onClick } = props;
    return (
        <div style={{ ...style, display: "block" }} onClick={onClick}>
        <MdKeyboardDoubleArrowLeft
            className="slick-arrow-icon-left text-3xl cursor-pointer"
        />
        </div>
    );
}