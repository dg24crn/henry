export async function createOrder(products: number[], token: string) {
    try {
      const res = await fetch(`http://localhost:4000/orders`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            Authorization: token
        },
        body: JSON.stringify({
            products
        })
      });
      const orders = await res.json();
      return orders;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  export async function getOrders(token: string) {
    try {
      const res = await fetch(`http://localhost:4000/users/orders`, {
        method: 'GET',
        cache: "no-cache",
        headers: {
            "Content-type": "application/json",
            Authorization: token
        },
      });
      const orders = await res.json();
      return orders;
    } catch (error: any) {
      throw new Error(error);
    }
  }