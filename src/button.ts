import { ToolbarButton } from '@jupyterlab/apputils';
import { DocumentRegistry } from '@jupyterlab/docregistry';
import {
    NotebookActions,
    NotebookPanel,
    INotebookModel,
} from '@jupyterlab/notebook'


import { IDisposable, DisposableDelegate } from '@lumino/disposable';


export class ButtonExtension
    implements DocumentRegistry.IWidgetExtension<NotebookPanel, INotebookModel>
{
    /**
     * Create a new extension for the notebook panel widget.
     *
     * @param panel Notebook panel
     * @param context Notebook context
     * @returns Disposable on the added button
     */

    createNew(
        panel: NotebookPanel,
        context: DocumentRegistry.IContext<INotebookModel>
    ): IDisposable {
        const clearOutput = () => {
            alert('Esta es la extension creada por Aladino Ponce')
            NotebookActions.clearAllOutputs(panel.content);
        };
        const button = new ToolbarButton({
            className: 'clear-output-button',
            label: 'Lab Extension MELI',
            onClick: clearOutput,
            tooltip: 'Clear All Outputs',
        });

        panel.toolbar.insertItem(10, 'clearOutputs', button);
        return new DisposableDelegate(() => {
            button.dispose();
        });
    }
}