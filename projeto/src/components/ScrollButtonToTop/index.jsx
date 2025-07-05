import React, { useEffect, useState } from "react";
import {FaArrowUp} from "react-icons/fa";
import {Button} from "./styles";


const ScrollTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        });
    };

    return (
        visible && (
            <Button title="Volte ao topo" className="scroll-top-button" onClick={scrollToTop}>
                <FaArrowUp size={30}/>
            </Button>
        )
    );
};

export default ScrollTopButton