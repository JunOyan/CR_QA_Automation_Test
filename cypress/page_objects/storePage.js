import 'cypress-xpath';
import {randomInt as rand} from 'mathjs';

/**
 * Store page for the website. Contains elements and methods belonging to this page.
 */
class storePage{
    _item_type = "";
    _supported_item_types = ["t-shirt", "jerseys"];
    elements = {
        //Product main page
        t_shirt_menu_link: () => cy.get("li[data-trk-id ='topnav-group-d-15720_t-shirts'] > a", ),
        jerseys_menu_link: () => cy.get("li[data-trk-id ='topnav-group-d-15675_jerseys'] > a"),
        hats_menu_link: () => cy.get("li[data-trk-id ~='topnav-group-d-15636_hats'] > a"),
        product_cells: () => cy.xpath("//div[@data-trk-id='product-grid']//div[@class='column'] \
        //div[@class='product-image-container']/a"),
        track_order_link: () => cy.xpath("//a[@data-talos='linkTrackOrder']"),
        gift_cards_link: () => cy.xpath("//a[@data-trk-id='top-bar-link-gift-cards']"),
        cart_icon_link: () => cy.xpath("//a[@data-trk-id='cart-icon']"),
        
        //Product selection options
        product_title_h1: () => cy.xpath("//div[@class='product-title-container']//h1"),
        t_shirt_size_selector: () => cy.xpath("//div[@id='size-selector-list']"),
        quantity_selector: () => cy.xpath("//div[@data-talos='ddItemQty' and @role='button']"),
        quantity_option: () => cy.xpath("//div[@class='drop-down-items']"),
        add_to_cart_btn: () => cy.xpath("//button[@data-trk-id='add-to-cart']"),
        waiting_request_frame: () => cy.get("div#sec-container"),
        std_choose_size_btn: () => cy.xpath("//input[@name='size-selector']/parent::label[1]"),

        //Track Orders
        input_order_number_field: () => cy.xpath("//input[@name='orderNumber']"),
        track_order_submit_btn: () => cy.xpath("//button[@data-talos='trackOrderButton']"),
        order_error_message_box: () => cy.xpath("//div[@data-talos='labelErrorMessageBox']"),
        
        //Gift Cards
        gift_card_number_textfield: () => cy.get("input#giftCardNumber"),
        check_balance_btn: () => cy.get("button[data-trk-id=check-balance]"),
        gift_card_error_msg: () => cy.xpath("//div[@class='balance-check-error-message']"),

        //Cart
        cart_delete_item_btn: () => cy.xpath("//button[@data-trk-id='cart-item-remove']"),
        cart_checkout_btn: () => cy.xpath("//button[@data-trk-id='checkout-button-cart-vertical']"),
        cart_continue_shopping_btn: () => cy.xpath("//a[@data-trk-id='continue-shopping']"),
        
        //Checkout - Shipping Address
        first_name_textfield: () => cy.get("input#firstName"),
        last_name_textfield: () => cy.get("input#lastName"),
        email_textfield: () => cy.get("input#email"),
        phone_textfield: () => cy.get("input#phone"),
        address1_textfield: () => cy.get("input#addressLine1"),
        address2_textfield: () => cy.get("input#addressLine2"),
        country_dropdown_selector: () => cy.get("div[data-talos=dropdownShippingCountry][role=button]"),
        postal_code_textfield: () => cy.get("input#postalCode"),
        city_textfield: () => cy.get("input#city"),
        state_textfield: () => cy.get("input#state"),
        continue_checkout_btn: () => cy.get("button[data-trk-id=continue-checkout]"),
    };
    
    gotoTShirts(){
        this.elements.t_shirt_menu_link()
        .should('be.visible')
        .click({timeout:6000});
        this._item_type = "t-shirt";
    };

    gotoTrackOrders(){
        this.elements.track_order_link()
        .should('be.visible')
        .click({timeout:6000});
    };

    gotoCart(){
        this.elements.track_order_link()
        .should('be.visible')
        .click({timeout:6000});
    };

    gotoCheckout(){
        this.elements.cart_checkout_btn()
        .should('be.visible')
        .click();
    };

    gotoGiftCards(){
        this.elements.gift_cards_link()
        .should('be.visible')
        .click({timeout:6000});
    };

    searchForTrackOrder(number){
        this.elements.input_order_number_field()
        .should('be.visible')
        .type(number)

        this.elements.track_order_submit_btn()
        .should('be.visible')
        .click()
    };

    searchForGiftCard(number){
        this.elements.gift_card_number_textfield()
        .should('be.visible')
        .type(number)

        this.elements.check_balance_btn()
        .should('be.visible')
        .click()
    };

    //Selects a random item from grid
    selectProduct(){
        this.elements.product_cells()
        .should('be.visible')
        .then((list) =>{
            let random = rand(0,list.length);
            cy.wrap(list[random])
            .focus().click({force:true});
        });
        
        this.elements.product_title_h1()
        .should('be.visible');
    };

    //Product Description
    addProductToCart(size="M", quantity=1){
        if(this._supported_item_types.includes(this._item_type)){
            //select size
            this.elements.t_shirt_size_selector()
            .xpath(`.//input[@value='${size}']/parent::label`)
            .should('be.visible')
            .click();
        }
        else
        {
            //select size
            this.elements.std_choose_size_btn()
            .should('be.visible')
            .click();
            console.log("Product not yet added for testing.")
        }

        //select quantity
        this.elements.quantity_selector()
        .should('be.visible')
        .click();
        this.elements.quantity_option()
        .xpath(`.//li[text()='${quantity}']`)
        .should('be.visible')
        .click();

        //add the product in cart
        this.elements.add_to_cart_btn()
        .should('be.visible')
        .click();
        
        //a temporary message appear detecting automation
        this.elements.waiting_request_frame()
        .should('be.visible')
        cy.wait(5000)

        //add the product in cart again
        this.elements.add_to_cart_btn()
        .should('be.visible')
        .click();
                
        //validation
        cy.get("div.order-summary-title", {timeout:8000})
        .should('be.visible');
    };

    //delete product from the cart
    deleteProductInCart(){
        this.elements.cart_delete_item_btn()
        .should('be.visible')
        .click();
    };

    //validates whether gift card number is invalid
    validGiftCardInvalid(){
        this.elements.gift_card_error_msg()
        .should('be.visible');
    };

    //validates whether order is invalid
    validateTrackOrderInvalid(){
        this.elements.order_error_message_box()
        .should('be.visible');
    };

    //validates whether cart is empty
    validateCartEmpty(){
        cy.xpath("//div[text()='Your Shopping Cart is Empty']")
        .should('be.visible')
        this.elements.cart_continue_shopping_btn()
        .should('be.visible')
    };
    
    //Checks whether the fields in checkout exists
    validateCheckoutFields(){
        this.elements.first_name_textfield().should('be.visible');
        this.elements.last_name_textfield().should('be.visible');
        this.elements.email_textfield().should('be.visible');
        this.elements.phone_textfield().should('be.visible');
        this.elements.address1_textfield().should('be.visible');
        this.elements.address2_textfield().should('be.visible');
        this.elements.country_dropdown_selector().should('be.visible');
        this.elements.postal_code_textfield().should('be.visible');
        this.elements.state_textfield().should('be.visible');
        this.elements.continue_checkout_btn().should('be.visible');
    };
}

module.exports = new storePage();
