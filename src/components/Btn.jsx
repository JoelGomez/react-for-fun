import propTypes from 'prop-types'

export const Btn = ({ data }) => {



    return (
        <>
            <table className='table container table-bordered mt-3'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.nombre}</td>
                                    <td>{item.edad}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>



        </>
    )
}

Btn.propTypes = {
    data: propTypes.array.isRequired
}





