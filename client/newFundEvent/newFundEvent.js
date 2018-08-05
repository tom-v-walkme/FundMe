import React, { Component } from 'react';

export default class NewFundEvent extends Component {

    constructor() {
        super();
        setTimeout(() => {
            ClassicEditor
                .create( document.querySelector( '#editor' ) )
                .then( newEditor => {
                    window.editor = newEditor;
                } )
                .catch( error => {
                    console.error(error);
                } );
        }, 1);
    }

    create() {
        console.log('created!');
    }

    getEditorData() {
        console.log(window.editor.getData());
    }

    handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file
            });
        };

        reader.readAsDataURL(file)
    }

    render() {
        return (
            <div>
                <form className="create-campaign" onSubmit={this.create.bind(this)}>
                    <label>שם העמותה</label>
                    <input type="text" ref="name"/>
                    <br/>

                    <label>לוגו העמותה</label>
                    <input className="fileInput" type="file" onChange={(e)=>this.handleImageChange(e)} />
                    <br/>

                    <label>דף הבית</label>
                    <input type="text" ref="homePage"/>
                    <br/>

                    <label>מספר עמותה</label>
                    <input type="text" ref="associationId"/>
                    <br/>

                    <label>טלפון</label>
                    <input type="text" ref="phone"/>
                    <br/>

                    <label>כתבו משהו...</label>
                    <textarea name="content" id="editor"></textarea>
                    <br/>

                    <label>הזמן פרטי תשלום</label>
                    <br/>
                    <label>בנק</label>
                    <input type="text" ref="bankNumber"/>
                    <br/>

                    <label>מספר סניף</label>
                    <input type="text" ref="bankBranch"/>
                    <br/>

                    <label>מספר חשבון</label>
                    <input type="text" ref="bankAccount"/>
                    <br/>

                    <label>שם בעל החשבון</label>
                    <input type="text" ref="bankAccountOwner"/>
                    <br/>

                    <label>שם משתמש ב-PayPal</label>
                    <input type="text" ref="paypalEmail"/>
                    <br/>

                    <label>מספר טלפון (bit)</label>
                    <input type="text" ref="bitPhone"/>
                    <br/>

                    <input type="submit" value="צור עמוד"/>
                </form>
            </div>
        );
    }
}