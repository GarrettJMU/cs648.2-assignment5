import React from 'react'
import { Link } from 'react-router-dom'
import graphQLFetch from './query.js'
import TextInput from './TextInput.jsx'
import NumberInput from "./NumberInput.jsx";

class ProductEdit extends React.Component {
    constructor() {
        super()
        this.state = {
            product: {},
        }
    }

    componentDidMount() {
        this.loadData()
    }

    componentDidUpdate(prevProps) {
        const {id: previousId} = prevProps.match.params
        const {id} = this.props.match.params
        if (id !== previousId) {
            this.loadData()
        }
    }

    onChange = (event, naturalValue) => {
        const { name, value: textValue } = event.target
        const value = naturalValue === undefined ? textValue : naturalValue
        this.setState((prevState) => ({
            product: { ...prevState.product, [name]: value },
        }))
    }

    async handleSubmit(e) {
        e.preventDefault()
        const { product } = this.state

        const query = `mutation productUpdate(
      $id: Int!
      $modify: ProductUpdateInputs!
    ) {
      productUpdate(
        id: $id
        modify: $modify
      ) {
        id Category Name Price Image
      }
    }`
        const { id, ...modify } = product
        const data = await graphQLFetch(query, { modify, id })

        if (data) {
            this.setState({ product: data.productUpdate })
            alert('Update Product Successfully') // eslint-disable-line no-alert
        }
    }

    async loadData() {
        const query = `query Product($id: Int!) {
      Product(id: $id) {
        id Name Price Category Image
      }
    }`
        const {
            match: {
                params: { id },
            },
        } = this.props
        const data = await graphQLFetch(query, { id })
        this.setState({ product: data.Product })
    }

    render() {
        const { Name, Price, Image, id, Category } = this.state.product;
        return id ? (
            <React.Fragment>
                <Link to={`/products`}>Back</Link>
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <h1>{`Editing Product ID: ${id}`}</h1>
                    <table>
                        <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>
                                <TextInput name="Name" value={Name} onChange={this.onChange} key={id} />
                            </td>
                        </tr>
                        <tr>
                            <td>Category:</td>
                            <td>
                                <select name="Category" value={Category} onChange={this.onChange}>
                                    <option value="Shirt">Shirt</option>
                                    <option value="Jeans">Jeans</option>
                                    <option value="Jackets">Jackets</option>
                                    <option value="Sweaters">Sweaters</option>
                                    <option value="Accessories">Accessories</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Price:</td>
                            <td>
                                <NumberInput name="Price" value={Price} onChange={this.onChange} key={id} />
                            </td>
                        </tr>
                        <tr>
                            <td>Image:</td>
                            <td>
                                <TextInput name="Image" value={Image} onChange={this.onChange} key={id} />
                            </td>
                        </tr>
                        <tr>
                            <td />
                            <td>
                                <button type="submit">Submit</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </React.Fragment>
        ) : (
            <h1>Loading Data...</h1>
        )
    }
}

export default ProductEdit