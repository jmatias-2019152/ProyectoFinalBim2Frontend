import { useEffect, useState } from 'react';
import { Navbar } from '../navbar/Navbar';
import { useDeleteEvent } from '../../shared/hooks/events/useDeleteEvent';
import { useSaveEvent } from '../../shared/hooks/events/useSaveEvent';
import { useUpdateEvent } from '../../shared/hooks/events/useUpdateEvent';
import { searchEventRequest } from '../../services/api';

const useSelectedHotel = () => {
    const [selectedHotel, setSelectedHotel] = useState('');

    return { selectedHotel, setSelectedHotel };
};

const FormAdmin = ({ hotels, selectedHotel, setSelectedHotel, event, getEvents, setEditingEvent }) => {
    const { save } = useSaveEvent();
    const { updateEvent } = useUpdateEvent();
    const [formData, setFormData] = useState({
        type: '',
        price: '',
        image: null
    });

    useEffect(() => {
        if (event) {
            setFormData({
                type: event.type,
                price: event.price,
                image: null,
            });
            setSelectedHotel(event.hotel._id);
        }
    }, [event, setSelectedHotel]);

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setFormData((prevData) => ({
                ...prevData,
                image: e.target.files[0],
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [e.target.name]: e.target.value,
            }));
        }
    };

    const clearForm = () => {
        setFormData({
            type: '',
            price: '',
            image: null,
        });
        setEditingEvent(null);
        const fileInput = document.getElementById('image');
        if (fileInput) {
            fileInput.value = null;
        }
    };

    const onHandleSave = async () => {
        try {
            const eventData = {
                type: formData.type,
                price: formData.price,
                image: formData.image,
            };
            if (event) {
                await updateEvent(event._id, eventData);
            } else {
                await save(
                    formData.type,
                    selectedHotel,
                    formData.price,
                    formData.image
                );
            }
            getEvents();
            clearForm();
        } catch (error) {
            console.error('Error con eventos', error);
        }
    }

    return (
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <div className="card shadow-lg">
                    <div className="card-header bg-warning text-black">
                        <h4 className="card-title text-center mb-0">Eventos</h4>
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                            <label htmlFor="type" className="form-label">
                                Tipo
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="type"
                                placeholder="Ingresa el tipo de evento"
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hotel" className="form-label">
                                Hotel
                            </label>
                            <select
                                id="hotel"
                                className="form-select"
                                value={selectedHotel}
                                onChange={(e) => setSelectedHotel(e.target.value)}
                            >
                                <option value="">Selecciona un hotel</option>
                                {hotels.map((hotel) => (
                                    <option key={hotel._id} value={hotel._id}>
                                        {hotel.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">
                                Precio
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="price"
                                placeholder="Ingresa el precio del evento"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">
                                Imagen
                            </label>
                            <input
                                type="file"
                                className="form-control"
                                id="image"
                                name="image"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button
                                type="button"
                                className="btn btn-success me-3"
                                onClick={onHandleSave}
                            >
                                {event ? 'Actualizar' : 'Guardar'}
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={clearForm}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const EventView = ({ events, hotels, getEvents }) => {
    const { selectedHotel, setSelectedHotel } = useSelectedHotel();
    const userRole = localStorage.getItem('userRole');
    const [editingEvent, setEditingEvent] = useState(null);
    const { deleteEvent } = useDeleteEvent();
    const [searchName, setSearchName] = useState('');
    const [foundEvents, setFoundEvents] = useState(null);

    const handleDeleteEvent = async (eventId) => {
        try {
            await deleteEvent(eventId);
            getEvents();
        } catch (error) {
            console.error('Error al eliminar el evento:', error);
        }
    };

    const handleEditEvent = (event) => {
        setEditingEvent(event);
        setSelectedHotel(event.hotel._id);
    };

    const handleSearch = async () => {
        try {
            const response = await searchEventRequest(searchName);
            if (response.error) {
                console.error('Error al buscar evento:', response.err);
            } else {
                console.log('Eventos encontrados:', response.data);
                if (response.data && response.data.length > 0) {
                    setFoundEvents(response.data);
                } else {
                    console.log('No se encontraron eventos');
                    setFoundEvents([]);
                }
            }
        } catch (error) {
            console.error('Error al buscar eventos:', error);
        }
    };

    const handleCancelSearch = () => {
        setFoundEvents(null); // Restablecer el estado de eventos encontrados
        setSearchName(''); // Limpiar el valor de búsqueda
    };

    return (
        <>
            <Navbar />
            {userRole === 'ADMIN' && (
                <FormAdmin
                    hotels={hotels}
                    selectedHotel={selectedHotel}
                    setSelectedHotel={setSelectedHotel}
                    event={editingEvent}
                    getEvents={getEvents}
                    setEditingEvent={setEditingEvent}
                />
            )}
            <br />
            <div className="mb-3 d-flex align-items-center">
                <input
                    type="text"
                    className="form-control me-2"
                    placeholder="Buscar eventos por nombre"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleSearch}>
                    Buscar
                </button>
                <button className="btn btn-secondary ms-2" onClick={handleCancelSearch}>
                    Cancelar
                </button>
            </div>
            <div className="row mx-4">
                {(foundEvents !== null ? foundEvents : events).map((event) => (
                    <div key={event._id} className="col-md-6 mb-4">
                        <div className="card h-100" style={{ fontSize: "1.2rem" }}>
                            <div className="card-body">
                                <h4 className="card-title">{event.type}</h4>
                                <h5 className="card-subtitle mb-2 text-muted">
                                    Hotel: {event.hotel.name}
                                </h5>
                                <div className="d-flex justify-content-center">
                                    <img
                                        src={`http://localhost:2656/event/getImg/${event._id}?timestamp=${Date.now()}`}
                                        style={{ width: '45%', height: '50%' }}
                                        crossOrigin='anonymous'
                                        alt='Imagen del evento'
                                    />
                                </div>
                                <p className="card-text">Precio: {event.price}</p>
                                {userRole === "ADMIN" && (
                                    <div className="d-flex justify-content-end">
                                        <button
                                            type="button"
                                            className="btn btn-warning btn-sm me-2"
                                            onClick={() => handleEditEvent(event)}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDeleteEvent(event._id)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
