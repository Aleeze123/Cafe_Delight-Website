import Image from 'next/image';
import Navbar from '@/components/Navbar';
import './menu.css';

const Menu = () => {
    const coffees = [
        { name: 'Espresso', description: 'Rich and bold coffee with a layer of crema.', price: '$3.00', image: '/Espresso.jpeg' },
        { name: 'Latte', description: 'Smooth espresso with steamed milk and foam.', price: '$4.50', image: '/Latte.jpeg' },
        { name: 'Cappuccino', description: 'Espresso with equal parts steamed milk and foam.', price: '$4.00', image: '/cappuccino.jpeg' },
        { name: 'Hot Chocolate', description: 'Rich and creamy hot chocolate topped with whipped cream.', price: '$3.50', image: '/hot_chocolate.jpeg' },
        { name: 'Americano', description: 'Espresso diluted with hot water for a smooth finish.', price: '$3.50', image: '/Americano.jpeg' },
        { name: 'Mocha', description: 'Rich chocolate combined with espresso and steamed milk.', price: '$4.75', image: '/Mocha.jpeg' },
        { name: 'Flat White', description: 'Creamy espresso with velvety microfoam.', price: '$4.25', image: '/flatwhite.jpeg' },
        { name: 'Macchiato', description: 'Espresso topped with a small amount of froth.', price: '$3.50', image: '/Macchiato.jpeg' },
    ];

    return (
        <div className="menu-page">
            <Navbar />
            <main className="menu-container">
                <h1 className="title">Coffee Menu</h1>
                <p className="subtitle">Discover our selection of freshly brewed coffees.</p>
                <section className="menu-section">
                    <h2 className="section-title">Our Coffees</h2>
                    <div className="menu-grid">
                        {coffees.map((coffee, index) => (
                            <div className="coffee-card" key={index}>
                                <Image src={coffee.image} alt={coffee.name} width={400} height={300} className="coffee-image" />
                                <h3 className="coffee-name">{coffee.name}</h3>
                                <p className="coffee-description">{coffee.description}</p>
                                <p className="coffee-price">{coffee.price}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Menu;
