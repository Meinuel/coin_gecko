import { Button } from "react-native"

const CoinButton = ({ title , callback }) => {
    return (
        <Button title={title} onPress={callback}/>
    )
}

export default CoinButton