
export default function Tabs({buttons, children, BtnContainer}){
    
    return (
        <>
        <BtnContainer>
        {buttons}
        </BtnContainer>
        {children}
        </>
    );
}