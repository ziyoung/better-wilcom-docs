# Peripheral device connections

Peripheral devices can be connected to your computer via USB port, serial port, parallel port, specialized network card, or Ethernet network. Local area networks (LANs) commonly use Ethernet networks for machine connection.

::: info Note
For instructions on connecting devices to your computer and setting up in MS Windows®, see the documentation for the device as well as your MS Windows® documentation.
:::

## USB ports

Most machines now use USB port connection. They appear just like a disk drive on your PC so there is no need to configure communication parameters as for serial or parallel port connections. Some machines such as Janome MB-4 and Barudan are supplied with propriety connection software. EmbroideryStudio supports connection to these machines via the Connection Manager option. [See Setting up machines for Connection Manager for details.](Setting_up_machines_for_Connection_Manager)

## Serial ports

PC serial COM ports are male connectors, and can be either 9-pin or 25-pin. They are named COM1, COM2, COM3, etc. You must be able to identify the ports on your computer. (If in doubt, consult a PC technician.) When you set up a device that is connected via a serial port, you need to enter the serial port settings in EmbroideryStudio as part of the setup procedure. [See also Enter serial port settings.](Enter_serial_port_settings)

The following table provides standard settings for various devices. They are a guide only. Settings for the same device may vary according to manufacturer. Check the documentation supplied with the device before setting up.

| Device             | Port | Baud | Hand-shaking | Data bits | Stop bits | Parity |
| ------------------ | ---- | ---- | ------------ | --------- | --------- | ------ |
| Digitizer          | COM1 | 9600 | None         | 8         | 1         | None   |
| Plotter            | COM2 | 9600 | XOn/XOff     | 8         | 1         | None   |
| Tape Punch         | COM2 | 4800 | XOn/XOff     | 8         | 1         | None   |
| Tape Reader        | COM2 | 4800 | XOn/XOff     | 8         | 1         | None   |
| Embroidery Machine | COM2 | 9600 | Hardware     | 8         | 1         | None   |

::: tip
The number of available ports limits the number of devices you can connect. If additional ports are required, you can add them. Multi-port serial cards can also be used. See a PC technician about your requirements.
:::
