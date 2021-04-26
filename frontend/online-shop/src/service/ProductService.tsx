import axios from "axios";

class ProductService {
  props: any;

  getAllProducts() {
    return axios
      .get("http://localhost:4000/products")
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  getProductById(props: any) {
    return axios
      .get("http://localhost:4000/products/" + props)
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  deleteProductById(props: any) {
    return axios.delete("http://localhost:4000/products/" + props);
  }

  handleResponse(response: any) {
    if (response.data) {
      console.log(response.data);
      return response.data;
    }
  }

  handleError(error: any) {}
}

export default ProductService;
