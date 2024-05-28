import Text from '../src/components/Text.jsx'
import Button from '../src/components/Button.jsx'
function AppSub() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <>
            <Text numbers={numbers} />
            <Button name={'Click'}></Button>
        </>
    )
}

export default AppSub