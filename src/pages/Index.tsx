import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [selectedCar, setSelectedCar] = useState<string | null>(null);
  const [submitForm, setSubmitForm] = useState({
    name: '',
    link: '',
    description: ''
  });

  const cars = [
    {
      id: 'porsche',
      name: 'Porsche 911',
      icon: '🏎️',
      edits: [
        {
          id: 1,
          title: 'GT3 RS Night Chase',
          image: 'https://cdn.poehali.dev/projects/ea7e250d-526c-45e3-a834-619c89dca327/files/9d00e9d8-a60a-405a-86ed-116ceb133478.jpg',
          author: 'SpeedEdit',
          likes: 1247
        },
        {
          id: 2,
          title: 'Carrera 4S Sunset',
          image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
          author: 'RacingVisuals',
          likes: 932
        },
        {
          id: 3,
          title: 'Turbo S Urban',
          image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80',
          author: 'CityDrive',
          likes: 1089
        }
      ]
    },
    {
      id: 'challenger',
      name: 'Dodge Challenger',
      icon: '💪',
      edits: [
        {
          id: 4,
          title: 'Hellcat Drift King',
          image: 'https://cdn.poehali.dev/projects/ea7e250d-526c-45e3-a834-619c89dca327/files/9e733263-42d8-4073-94f6-5d31049219ae.jpg',
          author: 'MuscleEdits',
          likes: 2134
        },
        {
          id: 5,
          title: 'R/T Burnout',
          image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
          author: 'PowerHouse',
          likes: 1543
        },
        {
          id: 6,
          title: 'SRT Demon Street',
          image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80',
          author: 'StreetRacer',
          likes: 1876
        }
      ]
    },
    {
      id: 'corvette',
      name: 'Chevrolet Corvette 1967',
      icon: '⚡',
      edits: [
        {
          id: 7,
          title: 'Stingray Classic',
          image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
          author: 'VintageSpeed',
          likes: 1654
        },
        {
          id: 8,
          title: 'C2 Chrome Dreams',
          image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
          author: 'ClassicCars',
          likes: 1432
        },
        {
          id: 9,
          title: 'Sting Ray Night',
          image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
          author: 'RetroRides',
          likes: 1298
        }
      ]
    }
  ];

  const handleSubmitEdit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена! 🎉",
      description: "Мы проверим твой эдит и добавим его в галерею.",
    });
    setSubmitForm({ name: '', link: '', description: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/20 to-transparent pointer-events-none z-0" />
      
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 animate-slide-in">
            <div className="text-4xl">🏁</div>
            <h1 className="text-2xl font-bold tracking-tight">
              <span className="text-primary">Speed</span>
              <span className="text-foreground">Edits</span>
            </h1>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2 hover-lift">
                <Icon name="Plus" size={18} />
                Добавить эдит
              </Button>
            </DialogTrigger>
            <DialogContent className="animate-zoom-in">
              <DialogHeader>
                <DialogTitle className="text-xl">Предложить свой эдит</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmitEdit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Название эдита</Label>
                  <Input
                    id="name"
                    placeholder="Например: GT3 RS Night Run"
                    value={submitForm.name}
                    onChange={(e) => setSubmitForm({ ...submitForm, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="link">Ссылка на эдит</Label>
                  <Input
                    id="link"
                    type="url"
                    placeholder="https://..."
                    value={submitForm.link}
                    onChange={(e) => setSubmitForm({ ...submitForm, link: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Описание (опционально)</Label>
                  <Textarea
                    id="description"
                    placeholder="Расскажи о своём эдите..."
                    value={submitForm.description}
                    onChange={(e) => setSubmitForm({ ...submitForm, description: e.target.value })}
                    rows={3}
                  />
                </div>
                <Button type="submit" className="w-full gap-2">
                  <Icon name="Send" size={18} />
                  Отправить на проверку
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            Лучшие автомобильные
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
              эдиты в одном месте
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Погрузись в мир скорости и мощности. Выбери легенду и наслаждайся эпичными эдитами.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 h-14">
            <TabsTrigger value="all" className="text-base">
              <Icon name="Layers" size={18} className="mr-2" />
              Все
            </TabsTrigger>
            {cars.map((car) => (
              <TabsTrigger key={car.id} value={car.id} className="text-base">
                <span className="mr-2">{car.icon}</span>
                {car.name.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            {cars.map((car, carIndex) => (
              <div key={car.id} className="space-y-4" style={{ animationDelay: `${carIndex * 0.1}s` }}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{car.icon}</span>
                  <h3 className="text-2xl font-bold">{car.name}</h3>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {car.edits.map((edit, index) => (
                    <Card
                      key={edit.id}
                      className="group overflow-hidden border-border/50 hover-lift cursor-pointer animate-zoom-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => setSelectedCar(edit.title)}
                    >
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden aspect-video">
                          <img
                            src={edit.image}
                            alt={edit.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                            <Icon name="Heart" size={16} className="text-secondary" />
                            <span className="text-sm font-medium">{edit.likes}</span>
                          </div>
                        </div>
                        <div className="p-4 space-y-2">
                          <h4 className="font-semibold text-lg line-clamp-1">{edit.title}</h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Icon name="User" size={14} />
                            <span>{edit.author}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          {cars.map((car) => (
            <TabsContent key={car.id} value={car.id}>
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-4xl">{car.icon}</span>
                  <h3 className="text-3xl font-bold">{car.name}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {car.edits.map((edit, index) => (
                    <Card
                      key={edit.id}
                      className="group overflow-hidden border-border/50 hover-lift cursor-pointer animate-zoom-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => setSelectedCar(edit.title)}
                    >
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden aspect-video">
                          <img
                            src={edit.image}
                            alt={edit.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                            <Icon name="Heart" size={16} className="text-secondary" />
                            <span className="text-sm font-medium">{edit.likes}</span>
                          </div>
                        </div>
                        <div className="p-4 space-y-2">
                          <h4 className="font-semibold text-lg line-clamp-1">{edit.title}</h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Icon name="User" size={14} />
                            <span>{edit.author}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🏁</span>
              <span className="font-semibold text-muted-foreground">
                SpeedEdits © 2024
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="gap-2">
                <Icon name="Instagram" size={18} />
                Instagram
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Icon name="Youtube" size={18} />
                YouTube
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
