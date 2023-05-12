import Sortable from 'sortablejs';

declare global {
    interface Window {
        ajaxurl: string;
        DegreeProgramListTableServerData: object;
    }
}

const icon = document.querySelector('.column-sortable-column .dashicons') as HTMLElement;

const sortable = Sortable.create(document.getElementById('the-list'), {
    dragClass: 'sorting',
    ghostClass: 'ghost',
    dataIdAttr: 'id',
    onEnd(event) {
        const ids = sortable.toArray().map((id) => parseInt(id.replace('post-', ''), 10));
        const currentPage = (document.getElementById('current-page-selector') as HTMLInputElement)
            .value;
        const perPage = (document.getElementById('edit_studiengang_per_page') as HTMLInputElement)
            .value;
        const element = event.item;

        icon.classList.add('spinner');
        element.classList.add('sorted');

        const request = new URLSearchParams({
            ...window.DegreeProgramListTableServerData,
            current_page: currentPage,
            per_page: perPage,
        });

        ids.forEach((id) => request.append('ids[]', id));

        fetch(window.ajaxurl, {
            method: 'POST',
            body: request,
        }).finally(() => {
            icon.classList.remove('spinner');
            element.classList.remove('sorted');
        });
    },
});
