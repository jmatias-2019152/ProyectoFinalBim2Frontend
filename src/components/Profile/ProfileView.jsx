import { Navbar } from '../navbar/Navbar';

export const ProfileView = ({ formData, isEditing, setIsEditing, handleChange, handleSave, handleCancel }) => {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h2>Perfil del Usuario</h2>
                <div className="card shadow-lg">
                    <div className="card-body">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Teléfono</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Dirección</label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                disabled={!isEditing}
                            />
                        </div>
                        {isEditing ? (
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-success" onClick={handleSave}>Guardar</button>
                                <button className="btn btn-danger" onClick={handleCancel}>Cancelar</button>
                            </div>
                        ) : (
                            <button className="btn btn-primary" onClick={() => setIsEditing(true)}>Editar</button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
