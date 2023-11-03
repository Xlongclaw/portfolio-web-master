export interface Size {
    value:Number
}

export interface CursorSizeContextProps {
    cursorSize:Size | null;
    setCursorSize:React.Dispatch<React.SetStateAction<Size | null>>
}