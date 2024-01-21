const data = [
  {
    currencyCode: "UAH",
    ibanCountryCode: "UA 93 325365 0000000260080039685",
    accountNumber: '0000000260080039685',
  },
  {
      currencyCode: "EUR",
      ibanCountryCode: "UA 32 325365 0000000260020039687",
      accountNumber: '0000000260020039687',
  },
  {
    currencyCode: "USD",
    ibanCountryCode: "UA 14 325365 0000000260050039686",
    accountNumber: '0000000260050039686',
},
]

function BankAccount({currencyCode, ibanCountryCode, accountNumber}) {
  return (
    <div className="bank-account">
      <h4 className="bank-account__title">{currencyCode}</h4>
      <div className="bank-account__info">
        <p>
          <p className="bank-account__bank">
          Beneficiary bank: KREDOBANK
          </p>
          <p className="bank-account__country-code">
            {ibanCountryCode}
          </p>
          <p className="bank-account__account-number">
            {accountNumber}
          </p>
          <p className="bank-account__identification-code">
            44881350
          </p>
        </p>
      </div>
    </div>
  )
}

export default function BankAccounts() {
  return (
    <div className={"accounts-container"}>
      {
        data.map((accountInfo, idx) => <BankAccount key={idx} {...accountInfo} />)
      }
    </div>
  );
}
