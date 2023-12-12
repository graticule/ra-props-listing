import Product from "../models/Product";

function Listing(props: { items: Product[]; }) {
  const items: Product[] = props.items;

  const trimTitle = (title: string) => {
    if (!title) return "";
    return title.length > 50 ? title.substring(0, 50) + "..." : title
  }
  const getPrice = (currencyCode: string, price: string) => {
    if (currencyCode === "USD") {
      return "$" + price;
    } else if (currencyCode === "EUR") {
      return "€" + price;
    } else {
      return price + " " + currencyCode
    }
  }

  const getQuantityLevel = (quantity: number) => {
    if (quantity <= 10) {
      return "low";
    } else if (quantity <= 20) {
      return "medium";
    }
    return "high";
  }
  return (
    <div className="item-list">
      {items.map((item: Product) => {
        return <div className="item">
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage.url_570xN} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{trimTitle(item.title ? item.title : "")}</p>
            <p className="item-price">{getPrice(item.currency_code ? item.currency_code : "", item.price ? item.price : "")}</p>
            { item.quantity ? <p className={`item-quantity level-${getQuantityLevel(item.quantity)}`}>{item.quantity} left</p> : null
            } 
          </div>
        </div>
      })
    }
    </div>
  )
}

export default Listing;