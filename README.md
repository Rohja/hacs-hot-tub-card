# Hot Tub Card

Hot Tub card initially made for my Balboa-based Hot Tub connected to [BWALink](https://github.com/jshank/bwalink)/MQTT using a RS485/IP adapter.

**This is a work in progress and things are subject to changes and might break from a version to another.**

![Demo](./demo.gif)

## Features

- Single Click to power on/off the lights
- Long Click to get extended lights control using [light-entity-card.js](https://github.com/ljmerza/light-entity-card) and [browser_mod](https://github.com/thomasloven/hass-browser_mod) (for the popup).
- Display outdoor temperature and current water temperature (including red and blue arrows to display if the current temperature is above or bellow the disired on).
- Display and control the main pump (0 -> 1 -> 2 -> 0 on click).
- Display and control the blower (on/off on click).
- Display if the heater is running (white = off, red = on).
- Display the current filtration cycles (up icon is first one, down icon is second one).

## Configuration

Here's an example of configuration using yaml:

```yaml
type: custom:hot-tub-card
light_entity: light.wled_garden_spa_2
pump_entity: number.bwa_link_hot_tub_pump
blower_entity: switch.bwa_link_hot_tub_blower
current_temp_entity: sensor.bwa_link_hot_tub_current_water_temperature
desired_temp_entity: number.bwa_link_hot_tub_target_water_temperature
outdoor_temp_entity: sensor.rouen_temperature
heater_entity: binary_sensor.bwa_link_hot_tub_heating
filter1_entity: binary_sensor.bwa_link_filter_cycle_1_running
filter2_entity: binary_sensor.bwa_link_filter_cycle_2_running
```

**Notes**:

- the `light_entity` needs to be a light entity that support RGB for now.
- the `pump_entity` needs to accept the following values: 0/off, 1/low speed, 2/high speed.

## ToDo

- [x] Graphical Editor
- [ ] Support regular light (non-rgb)
- [ ] Errors management
- [ ] Release process
- [ ] Better documentation
- [ ] Customize colors from YAML
- [ ] More flexible settings
- [ ] Something else ??
