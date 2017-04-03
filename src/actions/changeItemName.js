export default function changeItemName(event) {
    return {
        type: 'NEW_ITEM_NAME_CHANGED', 
        payload: event.target.value
    }
}