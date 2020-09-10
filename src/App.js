import React,{useState} from 'react';


import Home from './screens/Home';
import Navbar from './components/Navbar';
import Bottom from './components/Bottom';
import Cart from './screens/Cart';
import Shop from './screens/Shop';
import Account from './screens/Account';
import Product from './screens/Product';
import {Switch, Route} from 'react-router-dom';

function App() {
    const [cart , setCart] = useState([
        {"id":817,"name":"VIA Backpack","slug":"via-backpack","permalink":"https:\/\/9dna9.com\/product\/via-backpack\/","date_created":"2018-09-13T07:56:32","date_modified":"2020-08-25T20:10:20","type":"simple","status":"publish","featured":false,"catalog_visibility":"visible","description":"<p>\t\t\t\t<big>Sed do eiusmod tempor incididunt ut labore<\/big><\/p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.<\/p>\n<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\t\t<\/p>\n","short_description":"<p>\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\t\t<\/p>\n","sku":"042","price":"155","regular_price":"155","sale_price":"","date_on_sale_from":"","date_on_sale_to":"","price_html":"<span class=\"woocs_price_code\" data-product-id=\"817\"><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&pound;<\/span>&nbsp;155.00<\/bdi><\/span><\/span>","on_sale":false,"purchasable":true,"total_sales":0,"virtual":false,"downloadable":false,"downloads":[],"download_limit":-1,"download_expiry":-1,"download_type":"standard","external_url":"","button_text":"","tax_status":"taxable","tax_class":"","manage_stock":false,"stock_quantity":null,"in_stock":true,"backorders":"no","backorders_allowed":false,"backordered":false,"sold_individually":false,"weight":"","dimensions":{"length":"","width":"","height":""},"shipping_required":true,"shipping_taxable":true,"shipping_class":"","shipping_class_id":0,"reviews_allowed":true,"average_rating":"5.00","rating_count":2,"related_ids":[253,317,369,289,322],"upsell_ids":[],"cross_sell_ids":[],"parent_id":0,"purchase_note":"","categories":[{"id":112,"name":"Shirt","slug":"shirt"}],"tags":[{"id":32,"name":"Accessories","slug":"accessories"},{"id":34,"name":"Backpack","slug":"backpack"},{"id":35,"name":"Bags","slug":"bags"}],"images":[{"id":818,"date_created":"2018-09-13T07:57:01","date_modified":"2020-08-25T20:10:16","src":"https:\/\/9dna9.com\/wp-content\/uploads\/2018\/09\/1-39.jpg","name":"1","alt":"","position":0},{"id":819,"date_created":"2018-09-13T07:57:08","date_modified":"2020-08-25T20:10:16","src":"https:\/\/9dna9.com\/wp-content\/uploads\/2018\/09\/3-39.jpg","name":"3","alt":"","position":1},{"id":820,"date_created":"2018-09-13T07:57:11","date_modified":"2020-08-25T20:10:16","src":"https:\/\/9dna9.com\/wp-content\/uploads\/2018\/09\/4.jpg","name":"4","alt":"","position":2},{"id":821,"date_created":"2018-09-13T07:57:13","date_modified":"2020-08-25T20:10:16","src":"https:\/\/9dna9.com\/wp-content\/uploads\/2018\/09\/2-38.jpg","name":"2","alt":"","position":3}],"attributes":[],"default_attributes":[],"variations":[],"grouped_products":[],"menu_order":0,"_links":{"self":[{"href":"https:\/\/9dna9.com\/wp-json\/wc\/v1\/products\/817"}],"collection":[{"href":"https:\/\/9dna9.com\/wp-json\/wc\/v1\/products"}]}},
    ]);
    const addtoCart = (product) => {
        setCart([...cart,{...product}]);
    }
    const removeCart = (product) => {
        setCart([...cart,{...product}]);
    }
    return (
        <>
        <Navbar />
            <Bottom />
            <Switch>
            <Route exact path="/" render={()=> <Home cart={cart} setCart={setCart} addtoCart={addtoCart} removeCart={removeCart} />} />
            <Route exact path="/search" render={()=> <Shop cart={cart} setCart={setCart} addtoCart={addtoCart} />}/>
            <Route exact path="/account" render={()=> <Account cart={cart} setCart={setCart} addtoCart={addtoCart} />}/>
            <Route exact path="/cart" render={()=> <Cart cart={cart} setCart={setCart} addtoCart={addtoCart} />}/>
            <Route exact path="/product/:id" render={()=> <Product cart={cart} setCart={setCart} addtoCart={addtoCart} />}/>
            </Switch>
        </>
    );
}

export default App;