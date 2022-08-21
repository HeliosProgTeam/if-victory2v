import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import BankAccountsTable from "../BankAccountsTable/BankAccountsTable";
import Img from "../Image";
import StampImg from "./stamp.jpg";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "95%",
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: "10px",
  paddingTop: "10px",
  overflowY: "scroll",
};

export default function BankAccounts({ className }) {
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <div className={"bank-accounts"}>
      <Button onClick={handleOpen} className={className}>
        Реквiзити
      </Button>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="bank-accounts__header">
            <Button className="bank-accounts__btn-close" onClick={handleClose}>
              <CloseIcon />
            </Button>
          </div>

          <div className="bank-accounts__wrap">
            <div className="bank-accounts__top">
              <div className="bank-accounts__top-info">
                <h2 className={"bank-accounts__title"}>
                  Реквізити рахунків клієнта, Відкритих у {'"Кредобанк"'}
                </h2>
                <h3 className={"bank-accounts__top-text"}>
                  <p
                    className={
                      "bank-accounts__сolumn bank-accounts__сolumn--head"
                    }
                  >
                    Клієнт:
                  </p>
                  <p className={"bank-accounts__сolumn"}>
                    Благодійна Організація {'"Благодійний Фонд "ІФ-ВІКТОРІ""'}
                  </p>
                </h3>
                <p className={"bank-accounts__top-text"}>
                  <p
                    className={
                      "bank-accounts__сolumn bank-accounts__сolumn--head"
                    }
                  >
                    Ідент. код:
                  </p>
                  <p>44763366</p>
                </p>
              </div>
              <div className="bank-accounts__stamp">
                <Img src={StampImg} alt={"Штамп"} />
              </div>
            </div>
            <BankAccountsTable />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
