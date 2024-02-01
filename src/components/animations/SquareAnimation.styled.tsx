import styled from "styled-components";
type SquareAnimationPropsType = {
    index: number
}
export function SquareAnimation() {
    return (
        
            <SquareWrapper>
                <Square index={1}/>
                <Square index={2}/>
                <Square index={3}/>
                <Square index={4}/>
                <Square index={5}/>
            </SquareWrapper>
        
    );
}

const SquareWrapper = styled.div`
    position: absolute;
    width: 80%;
    height: 80%;
    animation: rotateAnimation 55000ms linear infinite; 
    top:0%; 
    left: 125%;
    

    @keyframes rotateAnimation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;



// Для пятого квадрата и далее, нужно установить соответствующий угол поворота.
export const Square = styled.div<SquareAnimationPropsType>`
    width: 100%;
    height: 100%;
    position: absolute;
    border: 1px solid;
    border-image: linear-gradient(#13b0f5, #e70faa) 1;
    transform: rotate(${props => props.index * 18}deg); 
    
 
`;
