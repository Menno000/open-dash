module.exports = new Map([
	[
		'shift/unknown',
		{
			event: 'shift',
			data: {}
		}
	], [
		'shift/park',
		{
			event: 'shift',
			initial: true,
			data: {
				shift_mode: 'park'
			}
		}
	], [
		'shift/reverse',
		{
			event: 'shift',
			data: {
				shift_mode: 'reverse'
			}
		}
	], [
		'shift/drive',
		{
			event: 'shift',
			data: {
				shift_mode: 'drive'
			}
		}
	], [
		'key/off',
		{
			event: 'key',
			data: {
				key_position: 0
			}
		}
	], [
		'key/on',
		{
			event: 'key',
			initial: true,
			data: {
				key_position: 1
			}
		}
	], [
		'key/start',
		{
			event: 'key',
			data: {
				key_position: 2
			}
		}
	], [
		'door/1/open',
		{
			event: 'door',
			cache_key: 'door/1',
			data: {
				door: 1,
				is_door_open: true
			}
		}
	], [
		'door/1/closed',
		{
			event: 'door',
			cache_key: 'door/1',
			initial: true,
			data: {
				door: 1,
				is_door_open: false
			}
		}
	], [
		'door/2/open',
		{
			event: 'door',
			cache_key: 'door/2',
			data: {
				door: 2,
				is_door_open: true
			}
		}
	], [
		'door/2/closed',
		{
			event: 'door',
			cache_key: 'door/2',
			initial: true,
			data: {
				door: 2,
				is_door_open: false
			}
		}
	], [
		'door/3/open',
		{
			event: 'door',
			cache_key: 'door/3',
			data: {
				door: 2,
				is_door_open: true
			}
		}
	], [
		'door/3/closed',
		{
			event: 'door',
			cache_key: 'door/3',
			initial: true,
			data: {
				door: 2,
				is_door_open: false
			}
		}
	], [
		'door/4/open',
		{
			event: 'door',
			cache_key: 'door/4',
			data: {
				door: 2,
				is_door_open: true
			}
		}
	], [
		'door/4/closed',
		{
			event: 'door',
			cache_key: 'door/4',
			initial: true,
			data: {
				door: 2,
				is_door_open: false
			}
		}
	], [
		'door/5/open',
		{
			event: 'door',
			cache_key: 'door/5',
			data: {
				door: 2,
				is_door_open: true
			}
		}
	], [
		'door/5/closed',
		{
			event: 'door',
			cache_key: 'door/5',
			initial: true,
			data: {
				door: 2,
				is_door_open: false
			}
		}
	], [
		'steering-wheel/controls/volume-up',
		{
			event: 'volume-up',
			data: {}
		}
	], [
		'steering-wheel/controls/volume-down',
		{
			event: 'volume-down',
			data: {}
		}
	], [
		'steering-wheel/controls/volume-mute',
		{
			event: 'volume-mute',
			data: {}
		}
	], [
		'steering-wheel/controls/seek-up',
		{
			event: 'seek-up',
			data: {}
		}
	], [
		'steering-wheel/controls/seek-down',
		{
			event: 'seek-down',
			data: {}
		}
	]
]);