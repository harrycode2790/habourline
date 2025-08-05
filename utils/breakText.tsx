    import { JSX } from "react";
 
    export default function breakLineText ( paragraph: string,  wordsPerLine : number)  {
        
        const words = paragraph.split(" ");
        const formattedText: (string | JSX.Element)[] = [];

        for (let i = 0; i < words.length; i++) {
            formattedText.push(words[i], " "); // Add word + space
            if ((i + 1) % wordsPerLine === 0) {
            formattedText.push(<br key={i} />); // Add line break after N words
            }
        }

        return formattedText;
    }