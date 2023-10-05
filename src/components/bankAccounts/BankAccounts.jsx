import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import BankAccountsTable from "../BankAccountsTable/BankAccountsTable";
import Img from "../Image";
import StampImg from "../../../public/images/stamp.webp";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxHeight: "95%",
  height: "100%",
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: "10px",
  paddingTop: "10px",
};

export default function BankAccounts({ className }) {
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <div className={"bank-accounts"}>
      <Button
        onClick={handleOpen}
        style={{
          fontWeight: " 600",
          fontSize: "20px",
          height: "42px",
          lineHeight: "42px",
          color: " inherit",
          textTransform: " capitalize",
          padding: "0",
          fontFamily: '"Jost", serif',
          letterSpacing: "0.005em",
          zIndex: "1",
        }}
      >
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
            <style>
              {`
            .bank-accounts__btn-close{
             display: flex;
             padding: 5px;
             color: black;
             margin:0 auto;
             width: 100%;
              }

              .bank-accounts__btn-close:hover {
              background-color: rgba(0, 0, 0, 0.2);
            }
             .bank-accounts__btn-close svg {
              width: 32px;
              height: 32px;
            }`}
            </style>
          </div>

          <div
            className="bank-accounts__wrap"
            style={{ overflowY: "scroll", overflowX: "hidden", height: "100%" }}
          >
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
                  ></p>
                  <p className={"bank-accounts__сolumn"}>
                    Благодійна Організація{" "}
                    {'"Благодійний Фонд "ПрикарпатГарант""'}
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
                  <p>44881350</p>
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
