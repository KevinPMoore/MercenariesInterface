import { useState, useCallback, useEffect } from "react";

const useTypewriter = (text = "", delay = 1000, enabledFlag = true) => {
    const [displayText, setDisplayText] = useState("");
    const [typewriterCompleteFlag, setTypewriterCompleteFlag] = useState(false);

    const appendCharToDisplayText = useCallback(
        char => {
            setDisplayText(prevText => {
                const newText = prevText + char;
                return newText;
            });
        },
        [setDisplayText]
    );

    const typewriterLength = displayText?.length;

    useEffect(() => {
        let interval;
        if (enabledFlag) {
            let currentIndex = 0;
            interval = setInterval(() => {
                if (currentIndex < text.length) {
                    appendCharToDisplayText(text[currentIndex]);
                    currentIndex += 1;
                } else {
                    setTypewriterCompleteFlag(true);
                    clearInterval(interval);
                }
            }, delay);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
            setDisplayText("");
        };
    }, [appendCharToDisplayText, delay, enabledFlag, text]);

    return { displayText, typewriterCompleteFlag, typewriterLength };
};

export default useTypewriter;
