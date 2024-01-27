import { withLayout } from "../../src/layout/Layout";
import BankAccounts from "../../src/components/BankAccounts/BankAccounts";
import Divider from "../../src/components/divider/Divider";

function Donate() {
    return (
        <div className="donate">
            <h2 className="donate__title">Рахунки для платежів із-за кордону та по Україні</h2>
            <Divider />
            <BankAccounts />
        </div>
    )
}

export default withLayout(Donate);