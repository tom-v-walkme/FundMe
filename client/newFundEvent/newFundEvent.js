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

    render() {
        return (
            <div>
                <form className="create-campaign" onSubmit={this.create.bind(this)}>
                    <input type="text" ref="name" placeholder="name"/>
                    <textarea name="content" id="editor"></textarea>
                    <input type="button" value="Print data in console" onClick={this.getEditorData.bind(this)}/>
                </form>
            </div>
        );
    }
}