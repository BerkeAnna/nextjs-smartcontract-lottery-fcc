import {useMoralis} from "react-moralis"

export default function ManualHeader(){
    let web3Enabled = true
    const {enableWeb3} = useMoralis()


    return(<div>
        <Button>Connect</Button>
        </div>
    )
}