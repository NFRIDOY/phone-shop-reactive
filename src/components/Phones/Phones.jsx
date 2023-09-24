import Phone from './Phone/Phone'

export default function Phones({ phones }) {
    // const {id, image, phone_name, brand_name, price, rating} = phones;
    return (
        <div>
            <div className="grid grid-cols-3">
                {
                    phones?.map((phone) => <Phone key={phone.id} phone={phone}></Phone>)
                }
            </div>

        </div>
    )
}
