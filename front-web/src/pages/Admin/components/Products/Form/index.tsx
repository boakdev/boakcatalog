import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import BaseForm from '../../BaseForm';
import './styles.scss';


type FormState = {
    name: string;
    price: string;
    category: string;
    description: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const Form = () => {

    const [formData, setFormData] = useState<FormState>({
        name: '',
        price: '',
        category: '1',
        description: ''
    });


    const handleOnChange = (event: FormEvent) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(data => ({ ...data, [name]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payLoad = {
            ...formData,
            imgUrl: 'https://http2.mlstatic.com/D_NQ_NP_844371-MLB31693848375_082019-O.jpg',
            categories: [{ id: formData.category }]
        }

        makeRequest({ url: '/products', method: 'POST', data: payLoad })
            .then(() => {
                setFormData({ name: '', price: '', category: '', description: '' });
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <BaseForm title="CADASTRAR PRODUTO">
                <div className="row">
                    <div className="col-6">
                        <input type="text"
                            value={formData.name}
                            className="form-control mb-5"

                            name="name"
                            onChange={handleOnChange}
                            placeholder="Nome do Produto"
                        />
                        <select className="form-control mb-5" value={formData.category} name="category" onChange={handleOnChange}>
                            <option value="1"> Livros</option>
                            <option value="3"> Computadores</option>
                            <option value="2"> Eletrônicos</option>
                        </select>
                        <input type="text"
                            className="form-control"
                            value={formData.price}
                            name="price"
                            onChange={handleOnChange}
                            placeholder="Preço"
                        />
                    </div>
                    <div className="col-6">
                        <textarea
                            className="form-control"
                            name="description"
                            value={formData.description}
                            onChange={handleOnChange}
                            cols={30}
                            rows={10}
                        />
                    </div>
                </div>
            </BaseForm>
        </form>

    )
}

export default Form;