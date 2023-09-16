import { set } from 'husky';
import { useState, useRef } from 'react';
// namespaces
import { OrderingDomainModel } from '@ratatouille/modules/order/core/model/ordering.domain-model';
import { GuestForm } from '@ratatouille/modules/order/core/form/guest.form';

// Function to generate a random name
function getRandomName(names:Array<string>) {
    var randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

export const useGuestSection = () => {

    function addGuest() {
        const newState = guestForm.current.addGuest(guests);
        setGuest(newState);
    }

    function removeGuest(id:string) {
        setGuest(guests.filter(guest => guest.id !== id));
    }

    function updateGuest(id:string, key:string, value:number | string) {
        console.log('update guest');
    }

    function changeOrganizer() {}

    function onNext() {}

    function isSubmitable() {
        return false;
    }
    
    const guestForm = useRef(new GuestForm());
    const [guests, setGuest] = useState<OrderingDomainModel.Guest[]>([]);

    return {
        addGuest,
        removeGuest,
        updateGuest,
        onNext,
        changeOrganizer,
        isSubmitable: isSubmitable(),
        guests
    }
}