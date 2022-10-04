import {ToolbarButton} from '@jupyterlab/apputils'
import { DocumentRegistry } from '@jupyterlab/docregistry'
import { INotebookModel, NotebookPanel } from '@jupyterlab/notebook'
import { IDisposable } from '@lumino/disposable';

export class ButtonExtension implements DocumentRegistry.IWidgetExtension<NotebookPanel,INotebookModel> {
    //create the toolbar button
    createNew(widget: NotebookPanel, context: DocumentRegistry.IContext<INotebookModel>): void | IDisposable {
        let myButton = new ToolbarButton({
            label: 'Labs',
            onClick: () => alert('Hecho!')
        });
        widget.toolbar.insertItem(10,'myButton', myButton);
        return myButton;
    }
}