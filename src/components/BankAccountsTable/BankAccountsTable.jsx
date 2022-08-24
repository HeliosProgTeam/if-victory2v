
const data = [
  {
    title: "В ЄВРО (EUR):",
    rows: [
      {
        head: "Intermediary \n Банк посередник",
        value: [
          "KBC BANK NV, Brussels, Belgium\nSWIFT:KREDBEBB",
          "COMMERZBANK AG, Frankfurt, Germany\nSWIFT: COBADEFF",
          "UNICREDIT S.P.A., Milano, Italy\nSWIFT: UNCRITMM",
          "RAIFFEISEN BANK INTERNATIONAL AG, Vienna, Austria\nSWIFT: RZBAATWW",
        ],
      },
      {
        head: "Beneficiary`s bank\nБанк-одержувача",
        value: "JSC KREDOBANK Lviv, Ukraine\nSWIFT:WUCBUA2X",
      },
      { head: "Beneficiary Name\nОдержувач", value: 'BO "BF"IF-VIKTORY"' },
      {
        head: "Beneficiary IBAN\nIBAN Одержувача",
        value: "UA903253650000000260070039815",
      },
    ],
  },
  {
    title: "В ГРН (UAH):",
    rows: [
      {
        head: "Одержувач",
        value: "Благодійна Організація \"Благодійний Фонд \"ІФ-ВІКТОРІ\"",
      },
      {
        head: "Ідентифікаційний код",
        value: "44763366",
      },
      { head: "Код Банку-одержувача", value: '325365' },
      {
        head: "Рахунок одержувача",
        value: "UA103253650Q00000260030039813",
      },
    ],
  },
];

export default function BankAccountsTable() {
  // {title,list}
  return (
    <div className={"table"}>
      {data.map((table) => {
        return (
          <div className="table__wrap" key={table.title}>
            <p className="table__title">{table.title}</p>
            {/*<div className="table__wrap" >*/}
              {table.rows.map((row) => {
                return (
                  <div className={"table__row"} key={table.title+row.head} style={{ whiteSpace: "pre-line" }}>
                    <div className="table__head">
                      <p>{row.head}</p>
                    </div>
                    <div className="table__value">
                      <p>
                        {console.log(typeof row.value)}
                        {typeof row.value === "object"
                          ? Object.values(row.value).map((bank,index) => (
                            <>
                            <p style={{marginBottom:"10px"}}>{bank}</p>
                            {index+1!==Object.values(row.value).length && <p>or/або</p>}
                            </>
                            ))
                          : row.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            {/*</div>*/}
          </div>
        );
      })}
    </div>
  );
}
