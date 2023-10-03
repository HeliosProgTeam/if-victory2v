const data = [
  {
    rows: [
      {
        head: "EUR",
        value: "UA 32 325365 0000000260020039687",
      },
    ],
  },
  {
    rows: [
      {
        head: "USD",
        value: "UA 14 325365 0000000260050039686",
      },
    ],
  },
  {
    rows: [
      {
        head: "UAH",
        value: "UA 93 325365 0000000260080039685",
      },
    ],
  },
];

export default function BankAccountsTable() {
  return (
    <div className={"table"}>
      {data.map((table) => {
        return (
          <div className="table__wrap" key={table.title}>
            <p className="table__title">{table.title}</p>
            {table.rows.map((row) => {
              return (
                <div
                  className={"table__row"}
                  key={table.title + row.head}
                  style={{ whiteSpace: "pre-line" }}
                >
                  <div className="table__head">
                    <p>{row.head}</p>
                  </div>
                  <div className="table__value">
                    <p>
                      {typeof row.value === "object"
                        ? Object.values(row.value).map((bank, index) => (
                            <>
                              <p style={{ marginBottom: "10px" }}>{bank}</p>
                              {index + 1 !==
                                Object.values(row.value).length && (
                                <p>or/або</p>
                              )}
                            </>
                          ))
                        : row.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
