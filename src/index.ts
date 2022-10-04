import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { ICommandPalette, MainAreaWidget } from '@jupyterlab/apputils'
import { Widget } from '@lumino/widgets';

/**
 * Initialization data for the test_labs extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'test_labs:plugin',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    console.log('JupyterLab extension test_labs is activated!');
    const content = new Widget();
    const widget = new MainAreaWidget({ content })
    widget.id = 'test_labs';
    widget.title.label = 'Meli Labs';
    widget.title.closable = true;

    const command: string = 'test_labs:open';

    app.commands.addCommand(command, {
      label: 'Random Astronomy Picture',
      execute: () => {
        if (!widget.isAttached) {
          // Attach the widget to the main work area if it's not there
          app.shell.add(widget, 'main');
        }
        // Activate the widget
        app.shell.activateById(widget.id);
      }
    });

    // Add the command to the palette.
    palette.addItem({ command, category: 'Labs Develop' });
  }
};

export default plugin;
