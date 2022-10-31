import './menu.css';

export function Menu(){
    return (
        <div className='MenuCard'>
            <div className='MenuContent'>
                <br/><br/><br/><br/><br/><br/><br/>
                <div className='uno'>
                    <h3>Pasteles</h3>
                    <img className='images' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.N1orKLui2Lu-nXd9KE1VAgHaFU%26pid%3DApi&f=1&ipt=614f381ee5be13e7ff68d2d2b964a1337b4462bf7e50fd44028c87eb62331428&ipo=images' alt='pasteles'/>
                    <p>Precio: $120, pasteles de todo tipo de sabores.
                    </p>
                </div>
                <div className='dos'>
                    <h3>Cafés</h3>
                    <img className='images' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.b7TftKYfXp_TPDDL8JOKAgHaE8%26pid%3DApi&f=1&ipt=d93ddf7c6cf9f10f13b1c5f45d4c65fb7496d6b8dcb329c83a331dd6f8fc8f79&ipo=images' alt='cafe'/>
                    
                    <p>Precio: $25, café colombiano, express y Americano.
                    </p>
                </div>
                <div className='tres'>
                    <h3>Frappes</h3>
                    <img className='images' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9-OKd2AEDLWnLtA7Je7tnAHaE8%26pid%3DApi&f=1&ipt=3edf4695d46fd06be0d58ef2f24eb1be17e860057360fd8e58891eed1047fa8d&ipo=images' alt='frappes'/>
                    <p>Precio: $60, Frapes de chocolate y Vainilla.
                    </p>
                </div>
                <br/>
            </div>
        </div>
        
    );
    }