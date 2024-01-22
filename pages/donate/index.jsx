import { withLayout } from "../../src/layout/Layout";
import { BankAccounts } from "../../src/components/BankAccounts";

function Donate() {
    return (
        <BankAccounts />
    )
}

export default withLayout(Donate);