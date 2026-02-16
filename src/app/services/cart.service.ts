import { Injectable, computed, signal } from '@angular/core';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  imageUrl?: string;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  isOpen = signal(false);

  // demo items for now (later wired to products)
  items = signal<CartItem[]>([
    { id: '1', name: 'Leather Bag', price: 199, qty: 1, imageUrl: 'assets/clutch-bag.jpg' },
    { id: '2', name: 'Canvas Tote', price: 89, qty: 2, imageUrl: 'assets/tote-bag.jpg' },
  ]);

  count = computed(() => this.items().reduce((sum, i) => sum + i.qty, 0));
  subtotal = computed(() => this.items().reduce((sum, i) => sum + i.price * i.qty, 0));

  open(): void { this.isOpen.set(true); }
  close(): void { this.isOpen.set(false); }
  toggle(): void { this.isOpen.update(v => !v); }

  inc(id: string): void {
    this.items.update(list =>
      list.map(i => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
    );
  }

  dec(id: string): void {
    this.items.update(list =>
      list
        .map(i => (i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i))
    );
  }

  remove(id: string): void {
    this.items.update(list => list.filter(i => i.id !== id));
  }

  clear(): void {
    this.items.set([]);
  }
}
