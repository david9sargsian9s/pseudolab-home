import "./QuotationBlockHolder.css"

export const QuotationBlockHolder = ({ Quotation, QuotationImage, QuotationDiscussion }) => {
  return (
    <div className="QuotationBlockHolder">
        <div className="Qholding">
            <h1>{Quotation}</h1>
            <img src={QuotationImage} id="QlogoConf" alt="quotation" />
        </div>
        <h2 id="Qdiscussion">{QuotationDiscussion}</h2>
    </div>
  )
}
