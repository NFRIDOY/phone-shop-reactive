import Phone from './Phone/Phone'

export default function Phones({ phones }) {
    // const {id, image, phone_name, brand_name, price, rating} = phones;
    return (
        <div>Phones
            <div className="grid grid-cols-3">
                {
                    phones?.map((phone) => <Phone phone={phone}></Phone>)
                }
            </div>

        </div>
    )
}