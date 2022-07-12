import TapSvg from "../components/icons/TapSvg"

const ClientTicket = () => {
  return (
    <div className='page__container'>
      <div className='client__content'>
        <h3>Click to get a new ticket</h3>
        <div className="client__btn">
            <span>Ticket</span>
            <TapSvg className="svg__tap"/>
        </div>
      </div>
    </div>
  )
}

export default ClientTicket